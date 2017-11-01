build:
	jekyll build

clean:
	rm Gemfile.lock

push:
	aws s3 blah blah push

deploy:
	build push

serve:
	jekyll serve
