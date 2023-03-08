const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');

const config = {
  dest: './dist',
  sassFiles: './src/**/*.scss',
  htmlFiles: './**/*.html',
  assersFiles: './src/asserts/**/*',
  tsFiles: './src/**/*.ts',
}

gulp.task('clear', () => {
  return (gulp.src(config.dest, {read: true, allowEmpty: true})
    .pipe(clean()));
});

gulp.task('html', () => {
  return gulp.src(config.htmlFiles)
        .pipe(gulp.dest(config.dest));
});

gulp.task('asserts', () => {
  return gulp.src(config.assersFiles, { base: './src'})
        .pipe(gulp.dest(config.dest));
});

gulp.task('styles', () => {
  return gulp.src(config.sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.dest));
});

gulp.task('watchers-dev', () => {
  gulp.watch([config.sassFiles], gulp.series('styles'));
  gulp.watch([config.htmlFiles], gulp.series('html'));
  return;
});


gulp.task('build', 
  gulp.series('html', 'asserts', 'styles'));

gulp.task('dev', 
  gulp.series('build'));
