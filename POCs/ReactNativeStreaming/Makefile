#!make

help:
	@echo "Usage: make [run-android|run-ios|test|lint|format_code]"
	@echo ""
	@echo "Usage:"
	@echo "  make android  	 Runs the app on android emulator"
	@echo "  make ios  	         Runs the app on ios simulator"
	@echo "  make test  	         Runs the react-native tests"
	@echo "  make lint  	         Runs the react-native linter"
	@echo "  make format_code       Formats the react-native code with prettier and fix the code style"
	@echo ""

setup: package.json
	npm run install-deps

test: setup
	npm run test

lint: setup
	npm run lint

format-code: setup
	npm run prettier

run-android:
	npm run android

run-ios:
	npm run ios
