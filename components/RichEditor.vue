<template>
  <div class='ckeditor-container'>
    <ckeditor :editor='editor'
              v-model:value='content'
              :config='editorConfig' />
    <span class='ckeditor-info'>
      <a-tag v-if='stats.words > 0' color='green'>
        {{ stats.words }} từ
      </a-tag>
    </span>
  </div>
</template>

<script>
let ClassicEditor
let CKEditor
if (process.client) {
  CKEditor = require('@ckeditor/ckeditor5-vue2')
  ClassicEditor = require('@idist/ckeditor5-build')
} else {
  CKEditor = { component: { template: '<div></div>' } }
}

export default {
  name: 'RichEditor',
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    value: String
  },
  data() {
    let self = this
    return {
      content: '',
      editor: ClassicEditor,
      editorConfig: {
        language: 'vi',
        toolbar: {
          items: [
            'ckfinder',
            'heading', '|', 'alignment',
            'fontfamily', 'fontsize', '|',
            'fontColor', 'fontBackgroundColor', '|',
            'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
            'link', '|',
            'code', 'codeBlock', '|',
            'outdent', 'indent', '|',
            'bulletedList', 'numberedList', 'todoList', '|',
            'insertTable', '|',
            'uploadImage', 'mediaEmbed', 'blockQuote', '|',
            'undo', 'redo'
          ]
        },
        ckfinder: {
          uploadUrl: `/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json`, //
          options: {
            connectorPath: `/ckfinder/core/connector/php/connector.php`
          }
        },
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
          ]
        },
        wordCount: {
          onUpdate: stats => {
            self.stats.characters = stats.characters
            self.stats.words = stats.words
          }
        }
      },
      stats: {
        characters: 0,
        words: 0
      }
    }
  },
  watch: {
    content: {
      handler: function() {
        this.$emit('update', this.content)
      }
    }
  },
  methods: {},
  created() {
    this.content = this.value
  },
  mounted() {
  }
}
</script>
