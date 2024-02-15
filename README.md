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

- `iframes` are NOT allowed

- On every page, teams must add a clear and visible link to the team GitHub Repo

## 2 Relevant Info

- You can find the requirements for Wiki Pages @ [here](https://competition.igem.org/judging/medals#h-documenting-your-work-on-required-wiki-pages)

- These are URLs for all the Wikis created by ZJU-China:
    > You can visit other team's Wiki by modifiying the LAST part of the URL
    - 2023: <a href="https://2023.igem.wiki/zju-china" target="_blank">Flora Sentinel</a>
    - 2022: <a href="https://2022.igem.wiki/zju-china" target="_blank">StoryLight</a>
    - 2021: <a href="https://2021.igem.org/Team:ZJU-China" target="_blank">ViruGuard</a>
    - 2020: <a href="https://2020.igem.org/Team:ZJU-China" target="_blank">MagHER2some</a>
    - 2019: <a href="https://2019.igem.org/Team:ZJU-China" target="_blank">PaDetector</a>
    - 2018: <a href="https://2018.igem.org/Team:ZJU-China" target="_blank">A Detector</a>
    - 2017: <a href="https://2017.igem.org/Team:ZJU-China" target="_blank">The Guardian Trichoderma</a>
    - 2016: <a href="https://2016.igem.org/Team:ZJU-China" target="_blank">Enigma</a>
    - 2015: <a href="https://2015.igem.org/Team:ZJU-China" target="_blank">Terminator</a>
    - 2014: <a href="https://2014.igem.org/Team:ZJU-China" target="_blank">GeneSocket</a>
    - 2013: <a href="https://2013.igem.org/Team:ZJU-China" target="_blank">The Ghost Kit</a>
    - 2012: <a href="https://2012.igem.org/Team:ZJU-China" target="_blank">RNA Scaffold</a>
    - 2011: <a href="https://2011.igem.org/Team:ZJU-China" target="_blank">Rainbofilm</a>
    - 2010: <a href="https://2010.igem.org/Team:ZJU-China" target="_blank">Bach</a>

- Best Wiki (Nominations) for recent years
  
  - [2023 Grand Jamboree](https://jamboree.igem.org/2023/results?scroll=Best%20Wiki#special-prizes)
  - [2022 Grand Jamboree](https://jamboree.igem.org/2022/results?scroll=Best%20Wiki#special-prizes)
  - [2021 Grand Jamboree](https://jamboree.igem.org/2021/results?scroll=Best%20Wiki#special-prizes)

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

2. Init Git Pages on branch `gh-pages` [try to create gh-pages]

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
