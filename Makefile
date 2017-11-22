build:
	bundle exec jekyll build

clean:
	rm Gemfile.lock

push:
	aws s3 blah blah push

deploy:
	build push

serve:
	xdg-open http://localhost:4000/
	bundle exec jekyll serve
