import os
import sys

paths = {
    "atoms": "ui/home/atoms",
    "molecules": "ui/home/molecules",
    "organisms": "ui/home/organisms",
    "sharing/atoms": "ui/sharing/atoms",
    "sharing/molecules": "ui/sharing/molecules",
    "sharing/organisms": "ui/sharing/organisms",
}


def create_files_and_folders(path, folder_name):
    folder_path = os.path.join(os.getcwd(), path, folder_name)

    if os.path.exists(folder_path):
        print(f'La carpeta "{folder_name}" ya existe en la ruta {path}.')
        return

    os.makedirs(folder_path)

    jsx_file = os.path.join(folder_path, f'{folder_name}.jsx')
    style_file = os.path.join(folder_path, f'{folder_name}.style.js')
    responsive_style_file = os.path.join(folder_path, f'{folder_name}.style.responsive.js')

    with open(jsx_file, 'w') as f:
        f.write(f'import React from "react"\nimport * as styles from "./{folder_name}.style"\n\nexport default function {folder_name}() {{\n  return (\n    <div>{folder_name}</div>\n  )\n}}\n')

    with open(style_file, 'w') as f:
        f.write(f'import {{ css, cx }} from "@emotion/css"\nimport {{ content, flex }} from "@mixins";\nimport * as responsive from "./{folder_name}.style.responsive"\n')

    with open(responsive_style_file, 'w') as f:
        f.write(f'import {{ css, cx }} from "@emotion/css"\nimport {{ forsize, font }} from "@mixins";\n')

    print(f'Creada la carpeta "{folder_name}" con los archivos .jsx, .style.js y .style.responsive.js en la ruta {path}.')

    index_file = os.path.join(os.getcwd(), path, "index.js")
    with open(index_file, 'a') as f:
        f.write(f'export {{ default as {folder_name} }} from "./{folder_name}/{folder_name}"\n')

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print('Uso: python create_files.py RUTA NOMBRE_DE_LA_CARPETA')
    else:
        custom_path = paths[sys.argv[1]]
        folder_name = sys.argv[2]
        create_files_and_folders(custom_path, folder_name)
