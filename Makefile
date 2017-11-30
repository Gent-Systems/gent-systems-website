build:
	bundle exec jekyll build

clean:
	rm Gemfile.lock

push:
	aws s3 blah blah push

deploy:
	build push

serve:
	# Funky workaround to get web browser to launch page after we build and
	# start the server since `jekyll serve` blocks till Ctrl+C. If building
	# takes longer than 3 seconds, adjust accordingly
	sleep 3 && xdg-open http://localhost:4000/ &
	bundle exec jekyll serve
