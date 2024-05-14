/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT( _name, _suitcolor, _eyecolor, _theme) {
    const NFT = {
        "name": _name,
        "suitcolor": _suitcolor,
        "eyecolor": _eyecolor,
        "theme": _theme
    }
    NFTs.push(NFT);
    console.log("Minted: " +_name);
    console.log("~~~~~~~~")
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(var list = 0; list < NFTs.length;list++) {
        console.log("NFT ID Number: \t" +(list+1));
        console.log("Name:\t \t" + NFTs[list].name);
        console.log("Suit Color:\t" + NFTs[list].suitcolor);
        console.log("Eye Color:\t" + NFTs[list].eyecolor);
        console.log("Theme:\t \t" + NFTs[list].theme);
        console.log("~~~~~~~~~~");
    }
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);
    console.log("~~~~~~~~~");
}


// call your functions below this line
mintNFT("Sunshine", "black", "yellow", "corporate");
mintNFT("Lux", "green", "light green", "superhero");
mintNFT("Mikka", "pink", "purple", "futuristic");
mintNFT("Mark", "blue", "red", "ancient");

listNFTs();
getTotalSupply();

