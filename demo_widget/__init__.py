import importlib.metadata
import pathlib

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("demo_widget")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class DemoWidget(anywidget.AnyWidget):
    def __init__(self, colour='red', **kwargs):
        super().__init__(**kwargs)
        self.colour = colour

    _esm = pathlib.Path(__file__).parent / "static" / "script.js"
    # _css = pathlib.Path(__file__).parent / "static" / "styles.css"

    colour = traitlets.Unicode().tag(sync=True)
    x_value = traitlets.Float().tag(sync=True)
    y_value = traitlets.Float().tag(sync=True)
