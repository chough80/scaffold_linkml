"""Data model package for scaffold_linkml_template."""

from pathlib import Path
from .scaffold_linkml_template import *  # noqa: F403

THIS_PATH = Path(__file__).parent

SCHEMA_DIRECTORY = THIS_PATH.parent / "schema"
MAIN_SCHEMA_PATH = SCHEMA_DIRECTORY / "scaffold_linkml_template.yaml"
