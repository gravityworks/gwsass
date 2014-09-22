# Require any additional compass plugins here.
require "sass-globbing"
require "susy"

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded 

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# If you don't want versioned sprite files, uncomment this:

# on_sprite_saved do |filename|
	# Make a copy of sprites with a name that has no uniqueness of the hash
	# if File.exists?(filename)
		# FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
		# FileUtils.rm_rf(filename)
	# end
# end

# on_stylesheet_saved do |filename|
	# Replace in stylesheets generated references to sprites
	# by their counterparts without the hash uniqueness.
	# if File.exists?(filename)
		# css = File.read filename
		# File.open(filename, 'w+') do |f|
			# f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\.png)}, '.png?v=\k<hash>')
		# end
	# end
# end
