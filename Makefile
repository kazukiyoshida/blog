build:
	yarn build
	cp docs/index.html docs/404.html
	python embed_tric.py
