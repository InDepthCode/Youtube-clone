package com.stream.app.implementation;

import ch.qos.logback.core.util.StringUtil;
import com.stream.app.entities.Video;
import com.stream.app.repositories.VideoRepository;
import com.stream.app.services.VideoService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {

  @Value("${files.video}")
  String DIR;

  @Autowired
  private VideoRepository videoRepository;

  @PostConstruct
  public void init(){

    File file = new File(DIR);
    if(!file.exists()){
        file.mkdir();
      System.out.println("Create a new folder");
    }
    else{
      System.out.println("Folder Already exists");
    }

  }


  @Override
  public Video save(Video video, MultipartFile file) {

    try {

      String fileName = file.getOriginalFilename();
      String contentType = file.getContentType();
      InputStream inputStream = file.getInputStream();


      // File Path
      String cleanFileName = StringUtils.cleanPath(fileName);

      // Folder Path : create
      String cleanFolder = StringUtils.cleanPath(DIR);

      // folder path with file name
      Path path = Paths.get(cleanFolder, cleanFileName);
      System.out.println(path);

      // copy file to folder
      Files.copy(inputStream, path, StandardCopyOption.REPLACE_EXISTING);

      // Video Meta data

      video.setContentType(contentType);
      video.setFilePath(path.toString());

      // save metadata
      return videoRepository.save(video);


      } catch (Exception e) {
      e.printStackTrace();
      return null;
    }


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
