PYTHON ?= python3
VENV ?= venv

ifeq ($(wildcard $(VENV)/bin/python),)
PYTHON_BIN := $(PYTHON)
else
PYTHON_BIN := $(VENV)/bin/python
endif

.PHONY: lint test compile verify landing-install landing-dev landing-lint landing-build landing-verify

lint:
	$(PYTHON_BIN) -m ruff check .

test:
	$(PYTHON_BIN) -m pytest tests/ --tb=short -q

compile:
	$(PYTHON_BIN) -m compileall -q src tests

verify: lint test compile

landing-install:
	npm --prefix landing ci

landing-dev:
	npm --prefix landing run dev

landing-lint:
	npm --prefix landing run lint

landing-build:
	npm --prefix landing run build

landing-verify: landing-lint landing-build
