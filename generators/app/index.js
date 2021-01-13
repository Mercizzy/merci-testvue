const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  async prompting() {
    this.answer = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "项目的名称是：",
        default: this.appname
      }
    ])
  }

  writing() {
    const arr = [
      "public/favicon.ico",
      "public/index.html",
      "src/assets/logo.png",
      "src/components/HelloWorld.vue",
      "src/App.vue",
      "src/main.js",
      "babel.config.js",
      "package.json",
      "README.md"
    ]

    arr.map(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answer
      )
    })

  }

}