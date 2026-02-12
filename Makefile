PYTHON ?= python3
VENV ?= venv

ifeq ($(wildcard $(VENV)/bin/python),)
PYTHON_BIN := $(PYTHON)
else
PYTHON_BIN := $(VENV)/bin/python
endif

.PHONY: lint test compile verify

lint:
	$(PYTHON_BIN) -m ruff check .

test:
	$(PYTHON_BIN) -m pytest tests/ --tb=short -q

compile:
	$(PYTHON_BIN) -m compileall -q src tests

verify: lint test compile
