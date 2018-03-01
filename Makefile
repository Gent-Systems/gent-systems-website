# Makefile for gent-systems.com
# To build, run `$ make` and to deploy to S3 run `$ make deploy`
#
# Author: John Gentile
# Date:   2/28/18

build:
	# Clean stale data
	rm -rf ./dist
	# First generate pending TODO.md list then display to stdout
	gulp todo
	cat ./TODO.md
	# Run PostCSS to optimize and minimize CSS
	gulp css
	# Minify final image, JavaScript & HTML files
	gulp minify-img
	gulp minify-js
	gulp minify-html
	# Move over all other files
	gulp move-files
	cp ./robots.txt ./dist/robots.txt
	# Generate sitemap.xml (from https://github.com/JohnnyGOX17/scripts/blob/master/generate-sitemap)
	./generate-sitemap -d "https://gent-systems.com/" -s "./*.html" > ./dist/sitemap.xml
	# Write current git revision to file for tracking
	git rev-parse --short HEAD > ./dist/revision

clean:
	# Deleting generated files...
	rm -rf ./dist
	rm -rf ./node_modules
	rm ./TODO.md
	rm ./sitemap.xml

# Jekyll should build before deploying to ensure site.url variables are used
# correctly (jekyll serve replaces site.url w/local host settings)
deploy: build
	# Deploying distribution to Amazon S3...
	aws s3 sync ./dist s3://gent-systems.com --delete

install:
	# Run before building on new system to install dependent packages or to
	# update local packages
	npm install

test:
	# Running simple HTTP Webserver to manually verify distribution
	sleep 1 && xdg-open http://localhost:8080/ &
	# If Python ver >3.x use `python -m http.server`
	# Change port from 8080 to other if necessary. Use Ctrl+C to stop...
	cd ./dist && python -m SimpleHTTPServer 8080
