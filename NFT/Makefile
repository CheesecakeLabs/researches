# ====================================================================================== #
# 							Common Makefile Commands
# ====================================================================================== #

# ----------------------- Install dependencies -----------------------
# This command installs the project dependencies (besides node and yarn).
#
# Command-Line:
# 		make install-dependencies
install-dependencies:
	@echo "Installing Solidity"
	npm install -g solc
	@echo "Installing Smart Contract dependencies"
	yarn install
	@echo "Installing Backend dependencies"
	cd web && yarn install && cd ..
	@echo "Installing Frontend dependencies"
	cd web/client && yarn install && cd ../..
	@echo "Done =)"


# ----------------------- Compile & Copy the contract   -----------------------
# This command compiles the smart contract and copy it to the backend
#
# Command-Line:
# 		make compile-and-compy
compile-and-copy:
	@echo "Compiling Poketoken"
	npx hardhat compile
	@echo "Copying Contract"""
	cp -f artifacts/contracts/Poketoken.sol/Poketoken.json web/public/Poketoken.json
