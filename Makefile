test:
	node --harmony_destructuring tests/grouping-tests.js

pushall:
	git push origin master && npm publish
