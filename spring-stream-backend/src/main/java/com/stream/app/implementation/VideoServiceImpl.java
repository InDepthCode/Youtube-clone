package com.stream.app.implementation;

import ch.qos.logback.core.util.StringUtil;
import com.stream.app.entities.Video;
import com.stream.app.services.VideoService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {

  @Value("${files.video}")
  String DIR;

  @Override
  public Video save(Video video, MultipartFile file) {

    try {// this will return a file name
      String fileName = file.getOriginalFilename();
      String contentType = file.getContentType();
      InputStream inputStream = file.getInputStream();

      // folder path: create

      String cleanFileName = StringUtils.cleanPath(fileName);
      String cleanFolder = StringUtils.cleanPath(DIR);

      Path path = Paths.get(cleanFolder, cleanFileName);
      System.out.println(path);

      // folder path with file name

      // copy the file to folder

      // video metadata

      // save metadata
      } catch (Exception e) {
      e.printStackTrace();
    }

    return null;
  }

  @Override
  public Video get(String videoId) {
    return null;
  }

  @Override
  public Video getByTitle(String videoTitle) {
    return null;
  }

  @Override
  public List<Video> getAll() {
    return List.of();
  }
}
