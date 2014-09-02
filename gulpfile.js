/* Require Plugins */
var gulp = require('gulp'),
    svgSprites = require('gulp-svg-sprites'),
    compass = require('gulp-compass'),
    lr = require('tiny-lr')(),
    express = require('express'),
    app = express();
 
 
/* Setup Configs */
var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;
var watching = false;
var svg = svgSprites.svg;
var png = svgSprites.png;
var spriteConfig = {
    className: "icon-%f",
    cssFile: "../sass/base/_sprites.scss",
    pngPath: "../images/%f",
    svgPath: "../images/%f"
};
var compassConfig = {
    config_file: 'config.rb',
    css: 'css',
    sass: 'sass'
}
 
function notifyLivereload(event) {
  var fileName = require('path').relative(EXPRESS_ROOT, event.path);
 
  lr.changed({
    body: {
      files: [fileName]
    }
  });
}
 
/* Handle Compass Errors breaking the watch task */ 
function onError(err) {
  console.log(err.toString());
  if (watching) {
    this.emit('end');
  } else {
    process.exit(1);
  }
}
 
gulp.task('startExpress', function () {
  app.use(require('connect-livereload')());
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
});
 
gulp.task('startLivereload', function() {
  lr.listen(LIVERELOAD_PORT);
});
 
gulp.task('compass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(compass(compassConfig).on("error", onError));
});
 
// Configure Compass Sprite Task 
gulp.task('sprites', function () {
    gulp.src('images-source/sprites/icons-misc/*.svg')
        .pipe(svg(spriteConfig))
        .pipe(gulp.dest("images"))
        .pipe(png());
});
 
 
// Watch Files For Changes
gulp.task('watch', function() {
    watching = true;
    // Uncomment these lines if you want to use the Express Server + livereload
    // gulp.watch('*.html', notifyLivereload);
    // gulp.watch('css/*.css', notifyLivereload);
    // gulp.watch('js/*.js', notifyLivereload);
    gulp.watch('images-source/sprites/icons-misc/*.svg', ['sprites']);
    gulp.watch('sass/**/*.scss', ['compass']);
});
 
// Default Task
gulp.task('default',['watch']);

// Default Task with Server
gulp.task('serve', ['startExpress','startLivereload','watch']);
