/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      createdAt
      name
      startDate
      endDate
      contents
      image
      updatedAt
      admin
      comments {
        items {
          id
          createdAt
          courseID
          content
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          like
          courseID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      createdAt
      courseID
      content
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        courseID
        content
        updatedAt
        course {
          id
          createdAt
          name
          startDate
          endDate
          contents
          image
          updatedAt
          admin
        }
        owner
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      createdAt
      like
      courseID
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        like
        courseID
        updatedAt
        course {
          id
          createdAt
          name
          startDate
          endDate
          contents
          image
          updatedAt
          admin
        }
        owner
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      createdAt
      name
      author
      image
      url
      updatedAt
      owner
      booklikes {
        items {
          id
          createdAt
          like
          bookID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        name
        author
        image
        url
        updatedAt
        owner
        booklikes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBookLike = /* GraphQL */ `
  query GetBookLike($id: ID!) {
    getBookLike(id: $id) {
      id
      createdAt
      like
      bookID
      updatedAt
      book {
        id
        createdAt
        name
        author
        image
        url
        updatedAt
        owner
        booklikes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listBookLikes = /* GraphQL */ `
  query ListBookLikes(
    $filter: ModelBookLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        like
        bookID
        updatedAt
        book {
          id
          createdAt
          name
          author
          image
          url
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
