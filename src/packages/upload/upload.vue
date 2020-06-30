<template>
    <div class="lk-upload">
        <template v-if="drag">
            <upload-dragger @file="uploadFiles"></upload-dragger>
        </template>
        <template v-else>
            <div @click="handleClick" class="lk-upload-btn">
                <slot></slot>
            </div>
            <input type="file" 
                ref="input"
                class="input"
                :accept="accept" 
                :name="name"
                :multiple="multiple"
                @change="handleChange">
        </template>
        <div>
            <slot name="tip"></slot>
        </div>
        <ul>
            <li v-for="file in files" :key="file.uid">
                <div class="list-item">
                    <lk-icon icon="sousuo"></lk-icon>
                    {{file.name}}
                    <lk-icon icon="ziyuanxhdpi" class="list-item-icon" @click.native="removeFile(file.uid)"></lk-icon>
                    <lk-progress v-if="file.status === 'uploading'" :percentage="file.percentage"></lk-progress>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ajax from './ajax.js';
import UploadDragger from './upload-dragger.vue';
export default {
    name: 'lk-upload',
    props: {
        name: {
            type: String,
            default: 'file'
        },
        action: {
            type: String,
            required: true
        },
        fileList: {
            type: Array,
            default: () => []
        },
        limit: Number,
        multiple: Boolean,
        onExceed: Function,
        onChange: Function,
        onError: Function,
        onProgress: Function,
        onSuccess: Function,
        beforeUpload: Function,
        accept: String,
        httpRequest: {
            type: Function,
            default: ajax
        },
        drag: {
            type: Boolean,
            default: false
        }
    },
    components: {
        UploadDragger
    },
    data() {
        return {
            tempIndex: 1,
            files: [],
            reqs: []
        };
    },
    watch: {
        fileList: {
            handler(fileList) {
                this.files = fileList.map(item => {
                    item.uid = Date.now() + this.tempIndex++;
                    item.status = 'success';
                    return item;
                })
            },  
            immediate: true
        }
    },
    methods: {
        removeFile(uid) {
            let deleteFile = this.files.find(item => item.uid === uid);
            this.files = this.files.filter(item => item.uid !== uid);
            // 中断上传中的ajax请求
            deleteFile.status === 'uploading' && this.reqs[uid].abort();
            this.onChange(this.files);
        },
        handleClick() {
            this.$refs.input.value = '';
            this.$refs.input.click();
        },
        handleChange(e) {
            const files = e.target.files;
            this.uploadFiles(files);
        },
        handleStart(rawFile) {
            // 给文件生成唯一的一个id标识
            rawFile.uid = Math.random() + this.tempIndex++;
            let file = {
                status: 'ready',//准备上传
                name: rawFile.name,
                size: rawFile.size,
                percentage: 0,//上传的进度
                uid: rawFile.uid,
                raw: rawFile
            }
            this.files.push(file);
            this.onChange && this.onChange(file);
        },
        post(rawFile) {
            //上传的逻辑，调用httpRequest方法，整合参数，调用ajax
            const uid = rawFile.uid;
            // ajax序号
            const options = {
                file: rawFile,
                filename: this.name,
                action: this.action,
                onProgress: ev => {
                    // 处理上传中状态
                    this.handleProgress(ev, rawFile);
                },
                onSuccess: res => {
                    //处理成功的状态
                    this.handleSuccess(res, rawFile);
                },
                onError: err => {
                    //处理失败的状态(都是ajax的回调函数)
                    this.handleError(err, rawFile);
                }
            }
            // req就是当前的请求
            let req = this.httpRequest(options);
            this.reqs[uid] = req;//每个ajax先存起来，稍后可以取消请求
            // 允许用户使用的的是promise的ajax
            if(req && req.then) {
                req.then(options.onSuccess, options.onError);
            }
        },
        upload(rawFile) {
            //文件上传，先判断该文件是否能够上传，没有任何限制，直接上传即可
            if(!this.beforeUpload) {
                //直接上传
                return this.post(rawFile);
            }
            //否则要调用用户的beforeUpload钩子，获取返回值
            let flag = this.beforeUpload && this.beforeUpload(rawFile);
            if(flag) {
                //用户返回true，直接上传
                return this.post(rawFile);
            }
        },
        uploadFiles(files) {
            //限制是否达到最大数量上限
            if(this.limit && this.files.length + files.length > this.limit) {
                this.onExceed && this.onExceed(files, this.fileList);
                return;
            }
            [...files].forEach(rawFile => {
                //用户的文件 要进行特殊处理 可能用户频繁上传同一个文件
                //将文件格式化成想要的结果
                this.handleStart(rawFile); //处理上传之前
                this.upload(rawFile);//真正的上传
            })
        },
        getFile(rawFile) {
            return this.files.find(item => item.uid === rawFile.uid);
        },
        handleProgress(ev, rawFile) {
            //设置不同的状态
            let file = this.getFile(rawFile);
            file.status = 'uploading';
            file.percentage = ev.percent || 0;
            this.onProgress(ev, rawFile);//调用用户的回调
        },
        handleSuccess(res, rawFile) {
            let file = this.getFile(rawFile);
            file.status = 'success';
            this.onSuccess(res, rawFile);//调用用户的回调
            this.onChange(file);//调用用户的回调
        },
        handleError(err, rawFile) {
            let file = this.getFile(rawFile);
            file.status = 'fail';
            this.onError(err, rawFile); //调用用户的回调
            this.onChange(file);
            delete this.reqs[file.uid]; //已经失败的ajax，不需要后续再中断请求了
        }
    }
}
</script>

<style lang="scss">
.lk-upload {
    .lk-upload-btn {
        display: inline-block;
    }
    input {
        display: none;
    }
}
.list-item {
    display: inline-block;
}
.list-item:hover {
    .list-item-icon {
        visibility: visible;
    }
}
.list-item-icon {
    width: 16px;
    height: 16px;
    color: #bdc1c5;
    transition: color .2s ease;
    visibility: hidden;
    &:hover {
        color: #7f7f80;
    }
}
</style>