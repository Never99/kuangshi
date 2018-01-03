
var gulp = require('gulp');
var GulpSSH = require('gulp-ssh');
//载入配置文件
var config = {
    version: '1.0.0',
    env: 'kmbk server',
    //上传配置
    ssh: {
        host: '10.156.0.23',
        //port: 22,
        username: 'xxxx',
        password: 'xxxxx',
    },
    remoteDir: '/storage/www/html',
    commands: [
        //删除现有文件
        'rm -rf /storage/www/html/static/',
        'rm -f /storage/www/html/index.html'
    ]
};;
var sshConfig = config.ssh;
//打开ssh通道
var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: sshConfig
});


/**
 * 上传文件
 */
gulp.task('deployFile', ['execSSH'],() => {
    console.log('5s后开始上传文件...');
    setTimeout(function(){
        return gulp
            .src(['./dist/**', '!**/node_modules/**'])
            .pipe(gulpSSH.dest(config.remoteDir));
    },5000);
    
});

/**
 * 执行命令
 */
gulp.task('execSSH', () => {
    //console.log('删除服务器上现有文件...');
    //return gulpSSH.shell(config.commands, {filePath: 'commands.log'})
    //    .pipe(gulp.dest('logs'));
});

