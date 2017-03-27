/**
 * Created by Administrator on 2017/3/26.
 */
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');