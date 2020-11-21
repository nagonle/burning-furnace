id:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"12"}' localhost:7000/api/search | jq
idp:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"121"}' localhost:7000/api/search | jq
raw:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"ooy"}' localhost:7000/api/search | jq
rawp:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"aba"}' localhost:7000/api/search | jq
rawn:
	@curl -s -X POST -H 'Content-type: Application/json' -d '{"query":"ooy", "skip": 1, "limit": 3}' localhost:7000/api/search | jq
