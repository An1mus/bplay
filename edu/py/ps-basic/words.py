"""
    Retrieve and print the words received from a url
    functions can be used separately
"""
import sys
from urllib.request import urlopen


TEST_URL = 'http://sixty-north.com/c/t.txt';


def fetch_words(url):
    """
    Fetch a list of words from a url
    :param url:
    :return:
    """
    story = urlopen(url)
    story_words = []
    for line in story:
        line_words = line.decode('utf8').split()
        for word in line_words:
            story_words.append(word)
    story.close()
    return story_words


def print_items(items):
    """
    Print item collection
    :param items:
    :return:
    """
    for word in items:
        print(word)


def main(url):
    """
    Print words colletion from the URL
    :param url:
    :return:
    """
    print_items(fetch_words(url))


if __name__ == '__main__':
    main(sys.argv[1])
