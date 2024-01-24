# iGEM24-WP-Tutorial
> Tutorial for ZJU-China 2024 WP Wiki

两位好鸭！本仓库包含了 iGEM Wiki 官方框架，想提前熟悉一下的可以自取。

有疑问可以戳我，可以帮忙 debug 但不会帮忙写 hhh。

- TODO (如果没有咕咕):

    - [ ] MathJax
    
    - 其他再说 (?) 毕竟我啥也不会

## 1 Requirements

- The final version of Wiki should be deployed as a `GitHub Pages Site` before <span style="color:red;">2024.02.24 0:00</span>

- HTML and all sort of source code MUST be committed to the Team Wiki repository on GitHub Repo

- iframes are NOT allowed

## 2 Relevant Info

- You can find the requirements for Wiki Pages @ [here](https://competition.igem.org/judging/medals#h-documenting-your-work-on-required-wiki-pages)

- These are URLs for all the Wikis created by ZJU-China:
    > You can visit other team's Wiki by modifiying the LAST part of the URL
    - https://2023.igem.wiki/zju-china/
    - https://2022.igem.wiki/zju-china/
    - https://2021.igem.org/Team:ZJU-China
    - https://2020.igem.org/Team:ZJU-China
    - https://2019.igem.org/Team:ZJU-China
    - https://2018.igem.org/Team:ZJU-China
    - http://2017.igem.org/Team:ZJU-China
    - http://2016.igem.org/Team:ZJU-China
    - http://2015.igem.org/Team:ZJU-China
    - http://2014.igem.org/Team:ZJU-China
    - http://2013.igem.org/Team:ZJU-China

- [Tutorial](https://gitee.com/igem_ucas_china/2024-drylab-tutorial/tree/master) by UCAS-China (Not Required)

## 3 Repo Structure (@main)

```text
|__ static/              -> static assets (minified CSS & JS files) & some SVGs
|__ wiki/                -> Main directory for the pages and layouts
    |__ footer.html
    |__ menu.html
    |__ layout.html      -> Main layout
    |__ pages/           -> Directory for all the pages
        |__ *.html
|__ .github/
    |__ workflows/              
    |__ build.yml       -> Automated flow for building and deploying 
|__ .gitignore          -> which files/directories should be ignored
|__ README.md           -> File containing the text you are reading right now
|__ app.py              -> Python code managing your wiki
|__ freezer.py          -> Python code for packing
|__ dependencies.txt    -> Software dependencies from the Python code
```

## 4 How to Use

### Preparation

Make sure that: 

- Git, Python3 & Virtualenv has been installed.

- You have a GitHub account.

### Initialize

1. Fork this Repo

2. Init Git Pages on branch `gh-pages`

    进入 `Setting->Pages`，在 `Branch` 中选择 `gh-pages` & `/(root)` 并保存修改

### Launch Locally

1. Install

    ```bash
    # clone the repository (with HTTPS)
    # OR you can just download the source code adn the extract it
    git clone [Code->Clone->Copy the Link]

    # create Python Virtual Environment
    cd iGEM24-WP-Tutorial
    python -m venv venv
    . venv/bin/activate     # on Linux, MacOS; or
    . venv\Scripts\activate # on Windows
    ```

2. Launch

    ```bash
    python app.py
    ```
    Then, you can visit the home page @ http://127.0.0.1:8080 or http://localhost:8080.

3. Update

    Simply `Commit & Push`. All the modifications would be automatically to branch:`gh-pages`.

    You can see the result @ `https://{Your Username}.github.io/iGEM24-WP-Tutorial/`

    如果没有及时更新，可以：1. 查看有没有失败的 Action 2. 清空浏览器缓存
