set -e

cd "$(dirname "$0")/.."

echo "==> Checking if NPM is available"

if ! [ -x "$(command -v npm)" ]; then
    echo "UH-OH: NPM is not installed. Install the latest version appropriate for your platform."
    exit 1
fi

echo "==> Checking if Angular CLI is available"

if ! [ -x "$(command -v ng v)" ]; then
    echo "Installing Angular CLI via NPM."
    npm install -g @angular/cli
    echo "Restarting setup script"
    script/setup
    exit 1
fi

echo "==> Linking SampleLibrary to SampleApp"

cd "SampleLibrary"
npm link
cd "../SampleApp"
npm link sample-library

cd "../"

echo "==> Buildling  SampleLibrary"

cd "SampleLibrary"
npm install
npm audit fix
ng build --prod

cd "../"

echo "==> Building SampleApp"

cd "SampleApp"
npm install
npm audit fix

cd "../"

echo "==> Done boostrapping"