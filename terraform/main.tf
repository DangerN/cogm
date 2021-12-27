terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

resource "aws_s3_bucket" "public" {
  bucket = var.site-name
  acl = "public-read"

  website {
    index_document = "index.html"
  }

  tags = {
    "Project" = var.site-name
  }
}

resource "aws_s3_bucket_policy" "public" {
  bucket = aws_s3_bucket.public.id
  policy = data.aws_iam_policy_document.public-bucket-access.json
}

data "aws_iam_policy_document" "public-bucket-access" {
  statement {
    sid = "PublicBucketAccess"
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    actions = [
      "s3:GetObject"
    ]

    resources = [
      aws_s3_bucket.public.arn,
      "${aws_s3_bucket.public.arn}/*"
    ]
  }
}

data "aws_iam_policy_document" "documents-bucket-access" {
  statement {
    sid = "PublicBucketAccess"
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    actions = [
      "s3:GetObject"
    ]

    resources = [
      aws_s3_bucket.documents.arn,
      "${aws_s3_bucket.documents.arn}/*"
    ]
  }
}


resource "aws_s3_bucket" "documents" {
  bucket = var.document-bucket-name
  acl = "public-read"

  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }

  tags = {
    "Project" = var.site-name
  }
}

resource "aws_s3_bucket_policy" "documents" {
  bucket = aws_s3_bucket.documents.id
  policy = data.aws_iam_policy_document.documents-bucket-access.json
}
