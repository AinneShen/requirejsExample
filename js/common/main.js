/**
 * Created by dh on 2017/5/2.
 */
requirejs.config({
    urlArgs: 'v=1.0.0',
    paths: {
        "jquery": "../common/jquery-3.1.0.min"
    },
    map: {
        '*': {
            'css': '../common/css'
        }
    },
    shim: {
        jquery: {
            exports: 'jquery',
            deps: ['css!../../css/style.css']
        }
    }
})