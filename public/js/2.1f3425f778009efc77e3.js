(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{128:function(e,t,a){"use strict";a.r(t);var o=a(13).a,i=(a(67),a(1)),r=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"page-welcome"}},[a("div",{staticClass:"container"},[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("h4",[e._v("Select your video type")]),e._v(" "),a("b-form-radio-group",{attrs:{id:"ratio-type",options:e.ratioTypes,name:"ratio-type"},model:{value:e.ratioType,callback:function(t){e.ratioType=t},expression:"ratioType"}}),e._v(" "),a("hr"),e._v(" "),a("h4",{staticClass:"mt-4"},[e._v("Select your type")]),e._v(" "),a("b-form-radio-group",{attrs:{id:"media-type",options:e.mediaTypes,name:"media-type"},model:{value:e.mediaType,callback:function(t){e.mediaType=t},expression:"mediaType"}}),e._v(" "),a("hr"),e._v(" "),"video"===e.mediaType?a("div",[a("h4",{staticClass:"mt-5"},[e._v("Import your video file")]),e._v(" "),a("file-pond",{ref:"uploader",staticClass:"mt-4",attrs:{name:"media-upload","label-idle":"<h3>Drop files here...</h3><h5 class='text-danger'>*Video should be at least 10 seconds.</h5>","allow-multiple":!1,"allow-revert":!1,"accepted-file-types":"video/mp4",server:e.serverOptions,files:e.uploadFiles},on:{init:e.handleFilePondInit,processfile:e.handleProcessMedia}}),e._v(" "),a("b-button",{attrs:{variant:"danger"},on:{click:e.resetUploader}},[e._v("Reset")])],1):a("div",[a("h4",{staticClass:"mt-5"},[e._v("Import your image file")]),e._v(" "),a("b-button",{attrs:{variant:"info"},on:{click:e.onClickImage}},[e._v("Load Image")])],1),e._v(" "),a("hr"),e._v(" "),a("h4",{staticClass:"mt-5"},[e._v("Input your pixelate steps")]),e._v(" "),a("b-form-input",{attrs:{type:"number"},model:{value:e.steps,callback:function(t){e.steps=t},expression:"steps"}}),e._v(" "),a("b-button",{staticClass:"mt-4",attrs:{variant:"success"},on:{click:e.pixelate}},[e._v("Pixelate")])],1),e._v(" "),a("b-col",{attrs:{md:"8"}},[a("b-row",[a("b-col",{attrs:{md:"portrait"===e.ratioType?6:12}},[a("h3",[e._v("Original Video")]),e._v(" "),a("div",{class:"portrait"===e.ratioType?"video-portrait":"video-landscape"},[a("video",{ref:"preview",attrs:{id:"preview-video",controls:""}},[a("source",{attrs:{src:e.video?e.baseUrl+"/storage/"+e.video:"",type:"video/mp4"}})])])]),e._v(" "),a("b-col",{class:"portrait"===e.ratioType?"mt-0":"mt-3",attrs:{md:"portrait"===e.ratioType?6:12}},[a("h3",[e._v("Pixelated Video")]),e._v(" "),a("div",{class:"portrait"===e.ratioType?"video-portrait":"video-landscape"},[a("video",{ref:"pixelatedVideo",attrs:{id:"pixelated-video",controls:""}},[a("source",{attrs:{src:e.pixelated?e.baseUrl+"/storage/"+e.pixelated:"",type:"video/mp4"}})])])])],1)],1)],1)],1),e._v(" "),a("crop-modal",{ref:"cropperRef",on:{handleCropImage:e.onCropImage}}),e._v(" "),a("progress-modal",{ref:"progressRef",attrs:{progress:Number(e.progress),total:Number(e.steps),mode:Number(e.mode)}}),e._v(" "),a("input",{ref:"uploadImageRef",attrs:{type:"file",accept:"image/png, image/jpeg",id:"image-upload",hidden:""},on:{change:e.cropImage}})],1)}),[],!1,null,null,null);t.default=r.exports},13:function(e,t,a){"use strict";(function(e){var o=a(6),i=a.n(o),r=a(28),s=a.n(r),n=(a(62),a(29)),l=a.n(n),d=a(32),p=a(33),c=a(11),u=a.n(c),v=a(31),m=a.n(v);function f(e,t,a,o,i,r,s){try{var n=e[r](s),l=n.value}catch(e){return void a(e)}n.done?t(l):Promise.resolve(l).then(o,i)}var h=s()(l.a);t.a={name:"welcome",components:{FilePond:h,CropModal:d.a,ProgressModal:p.a},data:function(){return{uploadFiles:[],video:"",image:"",pixelated:"",duration:15,baseUrl:e.env.MIX_APP_URL,steps:5,progress:0,mode:0,serverOptions:{url:"".concat(e.env.MIX_APP_URL,"/api/uploadVideo"),revert:null,process:{withCredentials:!1}},ratioType:"portrait",ratioTypes:[{text:"Portrait (9 : 16)",value:"portrait"},{text:"Landscape (16: 9)",value:"landscape"}],mediaType:"video",mediaTypes:[{text:"Video",value:"video"},{text:"Image",value:"image"}]}},sockets:{connect:function(){},progress:function(e){this.progress=e.progress}},methods:{handleFilePondInit:function(){},handleProcessMedia:function(t,a){if(t)this.$bvToast.toast("Cannot upload the video",{title:"Warning",variant:"danger",solid:!0,autoHideDelay:2e3});else{var o=this.$refs.preview;this.video=a.serverId,o.src="".concat(e.env.MIX_APP_URL,"/storage/").concat(a.serverId),o.load()}},pixelate:function(){var t=this;""!==this.video?(this.progress=0,this.mode=0,this.$bvModal.show("progress-modal"),u.a.post("/api/pixelate",{path:this.video,steps:this.steps,type:this.ratioType}).then((function(a){var o=t.$refs.pixelatedVideo;t.pixelated=a.data,o.src="".concat(e.env.MIX_APP_URL,"/storage/").concat(a.data),o.load()})).catch((function(e){console.log(e)})).finally((function(){t.$bvModal.hide("progress-modal")}))):this.$bvToast.toast("Upload video first",{title:"Warning",variant:"danger",solid:!0,autoHideDelay:2e3})},resetUploader:function(){this.$refs.uploader.removeFiles()},onCropImage:function(t){var a,o=this;return(a=i.a.mark((function a(){var r,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(r=new FormData).append("file",t.img),r.append("duration",t.duration),a.next=5,m.a.fire({title:"Do you want to create pixelate together?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Create Both",denyButtonText:"Create Origin"});case 5:if(s=a.sent,r.append("scaleType",o.ratioType),r.append("steps",o.steps),!s.isConfirmed){a.next=13;break}r.append("pixelate",1),o.mode=0,a.next=20;break;case 13:if(!s.isDenied){a.next=18;break}r.append("pixelate",0),o.mode=1,a.next=20;break;case 18:return o.$bvToast.toast("Creating video is canceled",{title:"Warning",variant:"danger",solid:!0,autoHideDelay:2e3}),a.abrupt("return");case 20:o.progress=0,o.$bvModal.show("progress-modal"),u.a.post("/api/uploadImage",r).then((function(t){var a=o.$refs.preview;if(o.video=t.data.original,a.src="".concat(e.env.MIX_APP_URL,"/storage/").concat(o.video),a.load(),s.isConfirmed){var i=o.$refs.pixelatedVideo;o.pixelated=t.data.pixelated,i.src="".concat(e.env.MIX_APP_URL,"/storage/").concat(o.pixelated),i.load()}})).catch((function(e){console.log(e)})).finally((function(){o.$bvModal.hide("progress-modal")}));case 23:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments;return new Promise((function(o,i){var r=a.apply(e,t);function s(e){f(r,o,i,s,n,"next",e)}function n(e){f(r,o,i,s,n,"throw",e)}s(void 0)}))})()},cropImage:function(e){var t=this;if(0!==e.target.files.length){var a=e.target.files[0],o=new FileReader;this.$bvModal.show("image-crop-modal"),"portrait"===this.ratioType?this.$refs.cropperRef.initRate(9/16):this.$refs.cropperRef.initRate(16/9),o.onload=function(e){t.$refs.cropperRef.initData(e.target.result)},o.readAsDataURL(a)}},onClickImage:function(){this.$refs.files=(new DataTransfer).files,this.$refs.uploadImageRef.click()}}}}).call(this,a(3))},27:function(e,t,a){var o=a(68);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(9)(o,i);o.locals&&(e.exports=o.locals)},32:function(e,t,a){"use strict";var o=a(30),i=a.n(o),r=(a(65),{name:"crop-modal",components:{VueCropper:i.a},data:function(){return{imgSrc:"",ratio:9/16,duration:15}},methods:{initData:function(e){this.imgSrc=e,this.$refs.cropper.replace(e)},initRate:function(e){this.ratio=e},handleOk:function(e){var t=this.$refs.cropper.getCroppedCanvas().toDataURL();this.$emit("handleCropImage",{img:t,duration:this.duration})}}}),s=a(1),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{id:"image-crop-modal",title:"Crop your image","no-close-on-backdrop":"","no-close-on-esc":"",size:"lg"},on:{ok:e.handleOk},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var o=t.ok,i=t.cancel;return[a("div",{staticClass:"w-100 pl-5 pr-2 d-flex align-items-center justify-content-between"},[a("div",[a("span",{staticClass:"mr-2"},[e._v("Duration : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"duration"}],attrs:{type:"number"},domProps:{value:e.duration},on:{input:function(t){t.target.composing||(e.duration=t.target.value)}}})]),e._v(" "),a("div",[a("b-button",{attrs:{variant:"danger"},on:{click:function(e){return i()}}},[e._v("Cancel")]),e._v(" "),a("b-button",{staticClass:"ml-2",attrs:{variant:"success"},on:{click:function(e){return o()}}},[e._v("Create Video")])],1)])]}}])},[a("vue-cropper",{ref:"cropper",attrs:{src:e.imgSrc,alt:"Source Image","aspect-ratio":e.ratio}})],1)}),[],!1,null,null,null);t.a=n.exports},33:function(e,t,a){"use strict";var o={name:"progress-modal",props:{progress:{type:Number,default:0},total:{type:Number,default:0},mode:{type:Number,default:0}},computed:{showText:function(){return 1===this.mode&&0===this.progress?"Creating video":this.progress===this.total?"Merging video":"".concat(this.progress," of ").concat(this.total," steps are completed...")}}},i=a(1),r=Object(i.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-modal",{attrs:{id:"progress-modal","hide-header":"","hide-footer":"","no-close-on-backdrop":"","no-close-on-esc":"",centered:"","body-bg-variant":"info","body-text-variant":"light"}},[t("div",{staticClass:"d-flex align-items-center justify-content-center"},[t("b-spinner",{staticClass:"mr-2",attrs:{label:"loading",variant:"light"}}),this._v(" "),t("h5",{staticClass:"text-center mb-0"},[this._v(this._s(this.showText))])],1)])}),[],!1,null,null,null);t.a=r.exports},67:function(e,t,a){"use strict";a(27)},68:function(e,t,a){(e.exports=a(8)(!1)).push([e.i,"#page-welcome{padding:50px}#page-welcome .filepond--credits{display:none!important}#page-welcome .video-portrait{width:100%;padding-top:170%;position:relative}#page-welcome .video-landscape{width:100%;padding-top:56.25%;position:relative}#page-welcome video{width:100%;height:100%;position:absolute;top:0;left:0}",""])}}]);