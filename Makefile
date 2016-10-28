test:
	node tests/grouping-tests.js

pushall:
	git push origin master && npm publish
