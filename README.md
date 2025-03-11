# Adapting Anywidget demo for QuCAT

Initial example from https://anywidget.dev/en/getting-started/.

To get started, create and activate a conda environment:
```sh
conda env create -f environment.yml
conda activate demo-widget
```
Create a Python kernel from this environment:
```sh
python -m ipykernel install --user --name demo-widget --display-name "demo-widget"
```
Start JupyterLab:
```sh
jupyter lab
```

## External dependencies require bundling
https://anywidget.dev/en/bundling/

### Installation

```sh
python -m pip install demo-widget
```

### Development

In a virtual environment (e.g. conda or venv), install the package in editable mode:

```sh
python -m pip install -e ".[dev]"
jupyter lab
```

The widget front-end code bundles it's JavaScript dependencies. After setting up Python, install these dependencies locally:

```sh
npm install
```

While developing, you can run the following in a separate terminal to automatically
rebuild JavaScript as you make changes:

```sh
npm run dev
```
To close the dev server, hit Ctrl-C

### Bundling
```sh
esbuild --bundle --format=esm --outdir=demo_widget/static src/script.js  # add "--watch" for development
```

### Packaging
```sh
python -m build
python3 -m twine upload --repository testpypi dist/*
```

### Installation from test.pypi.org
```sh
python -m pip install -i https://test.pypi.org/simple/ demo-widget==0.0.1
```
