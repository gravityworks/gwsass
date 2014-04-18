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
    "svg-sprites": {
        options: { /* These are Global Options */
            spriteElementPath: "images/svg-icons-source",
            spritePath: "images/svg-min/sprites",
            cssPath: "images/svg-source",
            cssPrefix: "_icon"
        },
        misc: { /* These are options specific to the icons in our misc folder. */
          options: {
            sizes: {
              std: 18
            },
            refSize: 17
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
        tasks: ['svgmin']
      },
      svgicons: {
        files: ['images/svg-icons-source/**/*.svg'],
        tasks: ['svg-sprites']
      }
    }

  });

  grunt.registerTask('default', 'watch');

}
