var AnilistQuery = {
  GET_USER_INFO: `query($name: String) {
      User(name: $name) {
        id
        name
      }
    }`,
  GET_USER_REVIEWS: `query($page: Int, $userId: Int) {
      Page(page: $page) {
        pageInfo {
          currentPage
          hasNextPage
        }
        reviews(userId: $userId) {
          media {
            title {
              english
              romaji
            }
          }
          body(asHtml: false)
          score
        }
      }
    }`,
  GET_ANIME_SCORES_AND_NOTES: `query($userId: Int) {
        MediaListCollection(userId: $userId, type: ANIME) {
          lists {
            name
            entries {
              media {
                title {
                  english
                  romaji
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
              }
              score
              notes
            }
          }
        }
      }`,
  GET_MANGA_SCORES_AND_NOTES: `query($userId: Int) {
        MediaListCollection(userId: $userId, type: MANGA) {
          lists {
            name
            entries {
              media {
                title {
                  english
                  romaji
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
              }
              score
              notes
            }
          }
        }
      }`
}

Object.freeze(AnilistQuery);
