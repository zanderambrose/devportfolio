up:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose -f docker-compose.yml down

deploy:
	docker-compose --context linode -f docker-compose.prod.yml up -d --force-recreate
