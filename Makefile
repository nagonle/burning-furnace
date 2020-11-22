start:
	make build
	make run
build:
	docker build -t api .
run:
	docker run --rm --name api-js -d --env-file develop.env -p 7000:7000 api
stop:
	docker stop api-js

# Development tools
id:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"12"}' localhost:7000/api/search 
idp:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"121"}' localhost:7000/api/search
raw:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"ooy"}' localhost:7000/api/search
rawp:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"aba"}' localhost:7000/api/search
rawn:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"ooy", "skip": 1, "limit": 3}' localhost:7000/api/search
