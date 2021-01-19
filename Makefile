PROJECT = "redosdemo"
all: help

help:
	$(info **** INSTRUCTIONS ****)
	@echo "First time you use this, install dependencies with the following"
	@echo "make install"
	@echo ""
	@echo "To check if a regex is safe"
	@echo "make check REGEX=\"a(b+)+c\""
	@echo ""
	@echo "To time regex demo with a given string"
	@echo "make demo STR=\"hello\""
	@echo ""
	@echo "To start the test webserver:"
	@echo "make server"

demo:
	node demo $(STR)

install:
	npm install

check:
	node check "$(REGEX)"

server:
	node server

.PHONY: run