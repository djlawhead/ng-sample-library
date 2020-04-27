set -e

echo "==> Bootstrapping"

cd "$(dirname "$0")/.."

echo "==> Checking if NPM is available"

if ! [ -x "$(command -v npm)" ]; then
    echo "UH-OH: NPM is not installed. Install the latest version appropriate for your platform."
    exit 1
fi

echo "1. Checking if Angular CLI is available"

if ! [ -x "$(command -v ng v)" ]; then
    echo "Installing Angular CLI via NPM."
    npm install -g @angular/cli
    echo "Restarting setup script"
    script/setup
    exit 1
fi

echo "2. Buildling SampleLibrary"

cd "SampleLibrary"
npm install
ng build
cd "./dist/sample-library"
npm link

echo "3. Building SampleApp"

cd "../../../SampleApp"
npm install
npm link sample-library
ng build