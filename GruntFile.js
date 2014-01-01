module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      options: {
        config: '.compass.rb',
        force: true
      }
    },
    watch: {
      css: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['compass']
      }
    }
    
  });
 
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // Default task(s).
  grunt.registerTask('default', ['watch']);
 
};