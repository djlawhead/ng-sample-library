set -e

echo "==> Starting server"

cd "$(dirname "$0")/.."

script/update.sh

cd "SampleApp"

ng s