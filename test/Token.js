const {expect} = require("chai");

describe("Token contract", function () {
        it(
            "Deployment should assign the total supply of tokens to the owner", async function () {
                const [owner] = await ethers.getSigners();
                // console.log(owner)
                const Token = await ethers.getContractFactory("Token");

                const hardhatToken = await Token.deploy(999999999999999);

                const ownerBalance = await hardhatToken.balanceOf(owner.address);
                // console.log(ownerBalance)
                expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
            }
        )
    }
)

describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy(999999999999999);

        await hardhatToken.transfer(addr1.address, 2000);

        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(2000);

        await hardhatToken.connect(addr1).transfer(addr2.address, 100)

        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1900);
        expect(await hardhatToken.balanceOf(addr2.address)).to.equal(100);
    })
})