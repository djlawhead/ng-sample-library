set -e

echo "==> Starting SampleApp"

cd "$(dirname "$0")/.."

script/update.sh

cd "SampleApp"

ng s