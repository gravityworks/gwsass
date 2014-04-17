module.exports = function(grunt) {

 // load all grunt tasks
 require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

 grunt.initConfig({

   compass: {
     dev: {
       options: {
         config: 'config.rb',
         force: true
       }
     }
   },
   grunticon: {
     myIcons: {
       files: [{
           expand: true,
           cwd: 'images/svg-min',
           src: ['*.svg', '*.png'],
           dest: "images/svg-output"
       }],
       options: {
         datasvgcss: '../../sass/base/_svg-data.scss'
       }
     }
   },
   svgmin: {                       
     options: {             
         plugins: [{
             removeViewBox: false
         }, {
             removeUselessStrokeAndFill: false
         }]
     },
     dist: {                     
         files: [{              
             expand: true,       
             cwd: 'images/svg-source',     
             src: ['**/*.svg'],  
             dest: 'images/svg-min'
         }]
     }
   },
   watch: {
     sass: {
       files: ['sass/**/*.scss'],
       tasks: ['compass:dev']
     },
     svg: {
       files: ['images/svg-source/*.svg'],
       tasks: ['svgmin','grunticon']
       
     }
   }

 });

  grunt.registerTask('default', 'watch');

}
