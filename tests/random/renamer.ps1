$path = "e:\Source\eRepos\buildstuff\javascript-gym\tests\random\"
$path

# this is the location of the terminal, not the location of the file
$loc = Get-Location
$loc

# Rename all .js files (without renamed .test.js files)
Get-ChildItem $path\* -Exclude *.test.js, *.ps1 | Rename-Item -NewName { $_.Name -replace '.js', '.test.js' }

# Get a list of remaining .js files -- couldn't be renamed because there were already .test.js files for these
Get-ChildItem $path\* -Exclude *.test.js, *.ps1 | Select-Object BaseName

# Delete the remaining .js files
Get-ChildItem $path\* -Exclude *.test.js, *.ps1 | Remove-Item