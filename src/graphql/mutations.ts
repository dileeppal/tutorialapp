/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBookLike = /* GraphQL */ `
  mutation CreateBookLike(
    $input: CreateBookLikeInput!
    $condition: ModelBookLikeConditionInput
  ) {
    createBookLike(input: $input, condition: $condition) {
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
export const updateBookLike = /* GraphQL */ `
  mutation UpdateBookLike(
    $input: UpdateBookLikeInput!
    $condition: ModelBookLikeConditionInput
  ) {
    updateBookLike(input: $input, condition: $condition) {
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
export const deleteBookLike = /* GraphQL */ `
  mutation DeleteBookLike(
    $input: DeleteBookLikeInput!
    $condition: ModelBookLikeConditionInput
  ) {
    deleteBookLike(input: $input, condition: $condition) {
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
