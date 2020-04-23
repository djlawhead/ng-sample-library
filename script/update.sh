set -e

cd "$(dirname "$0")/.."

echo "==> Checking for updates"

script/bootstrap.sh

echo "==> Done update"