"""Structured clinical logging and audit telemetry for NIRMAYA platform."""

import logging
import sys
from typing import Optional
from datetime import datetime, timezone


class ClinicalLogFormatter(logging.Formatter):
    """Custom formatter standardizing clinical audit log lines with timestamps and correlation IDs."""

    def format(self, record: logging.LogRecord) -> str:
        timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
        request_id = getattr(record, "request_id", "-")
        log_level = record.levelname.ljust(8)
        message = super().format(record)
        return f"[{timestamp} UTC] [{log_level}] [req:{request_id}] {record.name}: {message}"


def setup_clinical_logging(debug: bool = False) -> logging.Logger:
    """Configure root and application loggers with clinical audit formatting."""
    logger = logging.getLogger("nirmaya")
    logger.setLevel(logging.DEBUG if debug else logging.INFO)

    # Avoid duplicate handlers if reloaded
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        handler.setFormatter(ClinicalLogFormatter())
        logger.addHandler(handler)

    # Ensure third-party noisy loggers are throttled
    logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
    logging.getLogger("uvicorn.error").setLevel(logging.INFO)

    return logger


logger = setup_clinical_logging()
