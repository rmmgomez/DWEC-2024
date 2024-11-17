import { replaceInFileSync } from 'replace-in-file';

const options = {
    files: './compiled.js',
    from: ['var Handlebars = require("handlebars");', /$/],
    to: ['import Handlebars from "handlebars/runtime";', 'export default templates;'],
}

replaceInFileSync(options);