const gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});

gulp.task('imagemin', () =>
    gulp.src('img/**')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('public/img'))
);
